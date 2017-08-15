package models

import (
	"errors"
	"fmt"
	"strconv"
)

import (
	"database/sql"
	_ "database/sql/driver"
	"nway/utils/log"
	"nway/utils/nway_db_connection"
)

type DbBase struct {
}

func (d *DbBase) Query(sqlstring string) (*sql.Rows, error) {
	var dbinstance *nwayconnection.NwayConnect = nil
	dbinstance = nwayconnection.NewDb()
	NwayConn := dbinstance.GetConn()
	if NwayConn == nil {
		logger.Error("Get The Connect Failed")
		return nil, errors.New("Not found connection")
	}
	//Nway_println(sqlstring)
	rows, err := NwayConn.Query(sqlstring)
	if err != nil {
		//log.Fatal("failed to scan", err)
		fmt.Println("Query a string error:", err)
		logger.Error(sqlstring)
		logger.Error(err)
		return nil, err
	}
	return rows, nil

}

func (d *DbBase) QueryPaging(sqlstring string, page, perpage int) (*sql.Rows, error) {
	sqlstring += " limit " + strconv.Itoa(perpage) + " offset " + strconv.Itoa((page-1)*perpage)
	var dbinstance *nwayconnection.NwayConnect = nil
	dbinstance = nwayconnection.NewDb()
	//fmt.Println("Query a Page SQL:", sqlstring)
	NwayConn := dbinstance.GetConn()
	if NwayConn == nil {
		logger.Error("Get The Connect Failed")
		return nil, errors.New("Get The Connect Failed")
	}
	rows, err := NwayConn.Query(sqlstring)
	if err != nil {
		//log.Fatal("failed to scan", err)
		//fmt.Println("Query a string error:", err)
		logger.Error(err)
		logger.Error(sqlstring)
		return nil, err
	}
	return rows, nil
}

func (d *DbBase) Exec(sqlstring string) error {
	var dbinstance *nwayconnection.NwayConnect = nil
	dbinstance = nwayconnection.NewDb()
	NwayConn := dbinstance.GetConn()
	if NwayConn == nil {
		logger.Error("Get The Connect Failed")
		err := errors.New("connect failed")
		return err
	}
	_, err := NwayConn.Exec(sqlstring)
	if err != nil {
		//log.Fatal("failed to scan", err)

		logger.Error(err)
		return err
	}
	return nil
}
func (d *DbBase) GetDb() *sql.DB {
	var dbinstance *nwayconnection.NwayConnect = nil
	dbinstance = nwayconnection.NewDb()
	NwayConn := dbinstance.GetConn()
	return NwayConn
}
