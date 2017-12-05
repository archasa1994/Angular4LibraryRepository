CREATE TABLE [dbo].[DailyBookIssues](
	[UserID] [int] NOT NULL,
	[BookID] [int] NOT NULL,
	[IssueDate] [datetime] NOT NULL,
	[IsFine] [bit] NOT NULL DEFAULT 0,
	[Fine] [decimal](18, 2) NOT NULL DEFAULT 0,
	[Returned] [bit] NOT NULL DEFAULT 0,
	[ReturnDate] [datetime] NOT NULL DEFAULT ('1753-01-01 00:00:00.000'),
	CONSTRAINT PK PRIMARY KEY([UserID],[BookID], [IssueDate]),
	CONSTRAINT FK_USERS FOREIGN KEY ([UserID]) REFERENCES [Users]([UserID]),
	CONSTRAINT FK_BOOKS FOREIGN KEY ([BookID]) REFERENCES [Books]([BookID])
	)