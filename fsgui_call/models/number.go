package models

import (
	"database/sql"
	"errors"
	"nway/utils/log"
	"strconv"
	//"fmt"
	//"strconv"
)

type DBNumber struct {
	DB DbBase
}

type NwayNumber struct {
	Callid       string
	Phonenumber  string
	IsCalled     bool
	CalledResult int
}

func (d *DBNumber) Add(uuid string, phonenumber string, groupid int64) error {
	SqlStr := "INSERT INTO callout_numbers_to_queue(phone_number, group_id, create_time, is_called,callid,called_result) " +
		"VALUES($1,$2,current_timestamp,False,$3,3);"
	stmt, err := d.DB.GetDb().Prepare(SqlStr)
	defer stmt.Close()
	if err == nil {
		_, err = stmt.Exec(phonenumber, groupid, uuid)
		return err
	}
	return errors.New("Can not add phone number to db:" + err.Error())
}

func (d *DBNumber) GetCurrentDateCount(groupid int64) (int, error) {
	SqlStr := "select count(1) from callout_numbers_to_queue where cast(create_time AS Date) =current_date and group_id= " + strconv.FormatInt(groupid, 10)
	rows, err := d.DB.Query(SqlStr)
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
func (d *DBNumber) GetCurrentDateNumber(groupid int64, page, perpage int) ([]NwayNumber, error) {
	SqlStr := "select phone_number,is_called,called_result,callid from callout_numbers_to_queue where cast(create_time AS Date) =current_date and group_id= " + strconv.FormatInt(groupid, 10)
	var rows *sql.Rows
	var err error
	if perpage > 0 && page >= 0 {
		rows, err = d.DB.QueryPaging(SqlStr, page, perpage)
	} else {
		rows, err = d.DB.Query(SqlStr)
	}
	var numbers []NwayNumber
	numbers = make([]NwayNumber, 0)
	defer rows.Close()
	if err == nil {
		for rows.Next() {
			var number NwayNumber
			err = rows.Scan(&number.Phonenumber, &number.IsCalled, &number.CalledResult, &number.Callid)
			if err == nil {
				numbers = append(numbers, number)
			}
		}
		return numbers, nil
	}
	return numbers, errors.New("Query numbers error")
}
