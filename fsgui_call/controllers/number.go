package controllers

import (
	"bytes"
	"encoding/csv"
	"fmt"
	"math/rand"
	"nway/fsgui_call/libs"
	//"nway/fsgui_call/service"
	"nway/fsgui_call/models"
	"os"
	"strconv"
	"time"

	"github.com/astaxie/beego"
	"github.com/satori/go.uuid"
)

type NumberController struct {
	BaseController
}

func RandInt(min int, max int) int {
	return min + rand.Intn(max-min)
}
func RandomString(l int) string {
	var result bytes.Buffer
	var temp string
	for i := 0; i < l; {
		temp = string(RandInt(65, 90))
		result.WriteString(temp)
		i++
	}
	return result.String()
}
func MakeRingPath(basepath string) string {
	var nwaypath string
	now := time.Now()
	nwaypath = basepath
	os.MkdirAll(nwaypath, 777)
	filename := strconv.Itoa(now.Year()) + strconv.Itoa(int(now.Month())) + strconv.Itoa(now.Day())
	filename += strconv.Itoa(now.Hour()) + strconv.Itoa(now.Minute()) + strconv.Itoa(now.Second())
	filename += RandomString(6)
	nwaypath += filename
	return nwaypath
}

func (this *NumberController) Import() {
	if this.isPost() {

		groupid := this.GetSession("groupid").(int64)
		f, h, _ := this.GetFile("numbers")
		path := h.Filename
		f.Close()

		filename := MakeRingPath("/opt/fsgui/fsgui_call/import/")
		filename += path
		err := this.SaveToFile("numbers", filename)
		if err != nil {
			this.showMsg(err.Error(), MSG_ERR)
		} else {
			//导入
			file, err := os.Open(filename)
			if err != nil {
				//fmt.Println("Error:", err)
				return
			}
			defer file.Close()
			reader := csv.NewReader(file)
			reader.Comment = '#' //可以设置读入文件中的注释符
			reader.Comma = ','   //默认是逗号，也可以自己设置
			ss, _ := reader.ReadAll()
			//fmt.Println(ss)
			sz := len(ss)
			var dbnumber models.DBNumber
			for i := 0; i < sz; i++ {
				//fmt.Println(ss[i])
				for j := 0; j < len(ss[i]); j++ {
					var id uuid.UUID = uuid.NewV1()
					//fmt.Println(ss[i][j])
					//fmt.Println("Group id:", groupid)
					err = dbnumber.Add(id.String(), ss[i][j], groupid)
					if err != nil {
						fmt.Println(err.Error())
					}
				}
			}
			this.redirect(beego.URLFor("NumberController.List"))
		}
	}
	this.Data["pageTitle"] = "导入号码数据"

	this.display()
}
func (this *NumberController) List() {
	this.Data["pageTitle"] = "呼出号码列表"
	page, _ := strconv.Atoi(this.GetString("page"))
	if page < 1 {
		page = 1
	}
	groupid := this.GetSession("groupid").(int64)
	var dbnumber models.DBNumber
	count, _ := dbnumber.GetCurrentDateCount(groupid)
	list, _ := dbnumber.GetCurrentDateNumber(groupid, page, PerPage)
	this.Data["pageBar"] = libs.NewPager(page, int(count), PerPage, beego.URLFor("NumberController.List"), true).ToString()
	this.Data["count"] = count
	this.Data["list"] = list
	this.display()
}
