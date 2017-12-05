CREATE TABLE [dbo].[ShelfCategory](
	[Id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[CategoryId] [int] NOT NULL,
	[ShelfId] [int] NOT NULL,
	CONSTRAINT FK_CATEGORYID FOREIGN KEY ([CategoryID]) REFERENCES [BookCategories]([CategoryID]),
	CONSTRAINT FK_SHELFID FOREIGN KEY ([ShelfId]) REFERENCES [ShelfDetails]([ShelfID])
	)