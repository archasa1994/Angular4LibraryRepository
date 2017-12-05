CREATE TABLE [dbo].[Users](
	[UserID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[UserName] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Fine] [decimal](18, 2) NOT NULL DEFAULT(0),
	[IsActive] [bit] NOT NULL DEFAULT 1
	)

