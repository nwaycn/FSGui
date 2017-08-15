package controllers

import (
	_ "nway/utils/nway_string"
	_ "strconv"

	"github.com/astaxie/beego"
)

type SystemController struct {
	BaseController
}

func (this *SystemController) List() {
	this.Data["pageTitle"] = "系统管理"

	beego.Alert("System to List....")
	this.display()
}

func (this *SystemController) Help() {
	this.Data["pageTitle"] = "帮助"
	this.redirect("http://freeswitch.net.cn/100.html")
	//this.display()
}
