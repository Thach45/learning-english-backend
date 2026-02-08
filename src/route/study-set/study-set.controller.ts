import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { Auth } from "src/shared/decorator/auth.decorator";
import { AuthenticationGuard } from "src/shared/guards/authentication.guard";
import { StudySetService } from "./study-set.service";
import {
  CreateStudySetWithVocabDto,
  UpdateStudySetDto,
  UpdateVocabularyDto,
  AddVocabularyDto,
  BulkAddVocabularyDto,
} from "./study-set.dto";
import { ActiveUser } from "src/shared/decorator/active-user.decorator";
import { TokenPayload } from "src/types/token.type";

@Controller("study-sets")
export class StudySetController {
  constructor(private readonly studySetService: StudySetService) {}

  @Post()
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  create(
    @Body() dto: CreateStudySetWithVocabDto,
    @ActiveUser() user: TokenPayload,
  ) {
    return this.studySetService.create(dto, user.userId);
  }

  @Get()
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  async findAll(
    @Query("category") category?: string,
    @Query("search") search?: string,
    @Query("page") page?: string,
    @Query("pageSize") pageSize?: string,
    @ActiveUser() user?: TokenPayload,
  ) {
    const data = await this.studySetService.findAll(
      category,
      search,
      page,
      pageSize,
      user?.userId,
    );
  
    return data;
  }

  @Get("popular")
  findPopular() {
    return this.studySetService.findPopular();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.studySetService.findOne(id);
  }

  @Patch(":id")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  update(
    @Param("id") id: string,
    @Body() updateStudySetDto: UpdateStudySetDto,
    @ActiveUser() user: TokenPayload,
  ) {
    return this.studySetService.update(id, updateStudySetDto, user.userId);
  }

  @Delete(":id")
  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  remove(@Param("id") id: string, @ActiveUser() user: TokenPayload) {
    return this.studySetService.remove(id, user.userId);
  }

  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  @Post(":studySetId/vocabularies")
  addVocabulary(
    @Param("studySetId") studySetId: string,
    @Body() vocabDto: AddVocabularyDto,
    @ActiveUser() user: TokenPayload,
  ) {
    return this.studySetService.addVocabulary(
      studySetId,
      vocabDto,
      user.userId,
    );
  }

  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  @Post(":studySetId/vocabularies/bulk")
  bulkAddVocabulary(
    @Param("studySetId") studySetId: string,
    @Body() dto: BulkAddVocabularyDto,
    @ActiveUser() user: TokenPayload,
  ) {
    return this.studySetService.bulkAddVocabulary(
      studySetId,
      dto,
      user.userId,
    );
  }

  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  @Put(":studySetId/vocabularies/:vocabularyId")
  updateVocabulary(
    @Param("studySetId") studySetId: string,
    @Param("vocabularyId") vocabularyId: string,
    @Body() vocabDto: UpdateVocabularyDto,
    @ActiveUser() user: TokenPayload,
  ) {
    return this.studySetService.updateVocabulary(
      studySetId,
      vocabularyId,
      vocabDto,
      user.userId,
    );
  }


  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  @Delete(":studySetId/vocabularies/:vocabularyId")
  removeVocabulary(
    @Param("studySetId") studySetId: string,
    @Param("vocabularyId") vocabularyId: string,
    @ActiveUser() user: TokenPayload,
  ) {
    return this.studySetService.removeVocabulary(
      studySetId,
      vocabularyId,
      user.userId,
    );
  }

  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  @Post(":id/toggle-like")
  toggleLike(@Param("id") id: string, @ActiveUser() user: TokenPayload) {
    return this.studySetService.toggleLike(id, user.userId);
  }

  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  @Post(":id/enroll")
  enroll(@Param("id") id: string, @ActiveUser() user: TokenPayload) {
    return this.studySetService.enroll(id, user.userId);
  }

  @Auth(["access-token"], "or")
  @UseGuards(AuthenticationGuard)
  @Get("enrolled/me")
  getEnrolledStudySets(
    @ActiveUser() user: TokenPayload,
    @Query("page") page?: string,
    @Query("pageSize") pageSize?: string,
  ) {
    return this.studySetService.findEnrolledByUser(user.userId, page, pageSize);
  }
}
