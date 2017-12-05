CREATE TABLE [dbo].[Books](
	[BookID] [int] NOT NULL PRIMARY KEY,
	[BookName] [nvarchar](max) NOT NULL,
	[Author] [nvarchar](max) NOT NULL,
	[CategoryID] [int] NOT NULL,
	[ShelfID] [int] NOT NULL,
	CONSTRAINT FK_CATEGORY FOREIGN KEY ([CategoryID]) REFERENCES [BookCategories]([CategoryID]),
	CONSTRAINT FK_SHELF FOREIGN KEY ([ShelfID]) REFERENCES [ShelfDetails]([ShelfID])
)