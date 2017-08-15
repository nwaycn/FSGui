package entity

import (
	"time"
)

type JRequestExt struct {
	//R                CBRequest
	Id               int64
	A_State          int
	B_State          int
	A_LastUpdateTime time.Time
	B_LastUpdateTime time.Time
	///////
	App_Rate      float64
	App_Rate_step int
	App_Rate_legs string
	////
	Route_name string
	Route_id   int64
	////
	User_id  int64
	Ori_name string
	//
	Callid       string
	App_id       int64
	Caller       string
	Callee       string
	Cdr_url      string
	Event_url    string
	Call_seconds int
	Extends      string
	//
	Route_rate   float64 //落地费率
	Request_time time.Time
	Ori_id       int64
}
