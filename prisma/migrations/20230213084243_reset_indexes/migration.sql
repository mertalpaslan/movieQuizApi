-- DropIndex
DROP INDEX "Question_quizId_creatorId_idx";

-- DropIndex
DROP INDEX "Quiz_showId_creatorId_idx";

-- CreateIndex
CREATE INDEX "Question_quizId_idx" ON "Question"("quizId");

-- CreateIndex
CREATE INDEX "Question_creatorId_idx" ON "Question"("creatorId");

-- CreateIndex
CREATE INDEX "Quiz_showId_idx" ON "Quiz"("showId");

-- CreateIndex
CREATE INDEX "Quiz_creatorId_idx" ON "Quiz"("creatorId");
