package entity

//. "database/sql"

const (
	AutoTrans = "***"

	Format_Date     = "2006-01-02"
	Format_DateTime = "2006-01-02 15:04:05"
)

type Operator struct {
	Id   int64
	Name string
}
