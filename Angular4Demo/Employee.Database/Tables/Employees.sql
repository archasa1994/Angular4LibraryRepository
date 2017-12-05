CREATE TABLE [dbo].[Employees](
	[code] [nvarchar](50) NOT NULL PRIMARY KEY,
	[name] [nvarchar](50) NULL,
	[gender] [nvarchar](50) NULL,
	[annualSalary] [decimal](18, 3) NULL,
	[dateOfBirth] [datetime] NULL,
	[password] [nvarchar](max) NOT NULL
	)