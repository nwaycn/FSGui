package models

import (
	"database/sql"
	"errors"
	"nway/fsgui_call/entity"
	"nway/utils/log"
	//"fmt"
	//"strconv"
)

type DBCdr struct {
	DB DbBase
}

func (this *DBCdr) GetCount() (int, error) {
	SqlStr := "select count(1) from cb_cdr "
	rows, err := this.DB.Query(SqlStr)
	defer rows.Close()
	if err != nil {
		logger.Error("Query Apps count error:", err)
		return 0, err
	}
	var count int = 0
	if rows.Next() {
		err = rows.Scan(&count)
		if err != nil {
			logger.Error("Query routes and Scan  count error:", err)
		}
		return count, err
	}
	return 0, errors.New("Not Found routes Count")
}

func (this *DBCdr) GetCdrs(page, perpage int) ([]entity.Jcdr, error) {
	SqlStr := "SELECT app_id, call_answertime, call_bill, call_billunit, call_duration, " +
		"call_endtime, call_id, call_rate, call_starttime, callee, caller, " +
		"cdr_type, extends, id, request_time, call_route " +
		" FROM cb_cdr order by request_time desc "
	var rows *sql.Rows
	var err error
	if perpage > 0 && page >= 0 {
		rows, err = this.DB.QueryPaging(SqlStr, page, perpage)
	} else {
		rows, err = this.DB.Query(SqlStr)
	}
	defer rows.Close()
	var cdrs []entity.Jcdr
	var cdr entity.Jcdr
	cdrs = make([]entity.Jcdr, 0)
	if err != nil {
		return cdrs, errors.New("Query cdrs error ")
	}
	for rows.Next() {
		err = rows.Scan(&cdr.App_id,
			&cdr.Call_answertime,
			&cdr.Call_bill,
			&cdr.Call_billunit,
			&cdr.Call_duration,
			&cdr.Call_endtime,
			&cdr.Call_id,
			&cdr.Call_rate,
			&cdr.Call_starttime,
			&cdr.Callee,
			&cdr.Caller,
			&cdr.Cdr_type,
			&cdr.Extends,
			&cdr.Id,
			&cdr.Request_time,
			&cdr.Call_route,
		//&cdr.Org_name
		)
		if err == nil {
			cdrs = append(cdrs, cdr)
		}
	}
	return cdrs, nil

}
