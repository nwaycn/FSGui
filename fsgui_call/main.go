package main

import (
	"fmt"

	"nway/fsgui_call/controllers"
	"nway/fsgui_call/service"
	"nway/utils/log"
	"runtime"
	"time"

	"github.com/astaxie/beego"

	"github.com/beego/i18n"
)

const VERSION = "1.2.0"

func eqint64(a, b int64) bool {
	return a == b
}
func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	logger.SetConsole(false)
	logger.SetRollingDaily(".", "nwaypbx.log")
	logger.SetLevel(logger.ALL)

	logger.Info("Starting Nway service\n")
	logger.Debug("Debug info\n")
	service.Init()
	beego.AppConfig.Set("version", VERSION)
	if beego.AppConfig.String("runmode") == "dev" {
		beego.SetLevel(beego.LevelDebug)
	} else {
		beego.SetLevel(beego.LevelInformational)
		beego.SetLogger("file", `{"filename":"`+beego.AppConfig.String("log_file")+`"}`)
		beego.BeeLogger.DelLogger("console")
	}
	beego.AddFuncMap("eqint64", eqint64)
	beego.AppConfig.Set("up_time", fmt.Sprintf("%d", time.Now().Unix()))

	beego.AddFuncMap("i18n", i18n.Tr)

	beego.SetStaticPath("/assets", "assets")
	beego.Router("/", &controllers.MainController{}, "*:Index")

	beego.Router("/index", &controllers.MainController{}, "*:Index")
	beego.Router("/login", &controllers.MainController{}, "*:Login")
	beego.Router("/logout", &controllers.MainController{}, "*:Logout")
	beego.Router("/profile", &controllers.MainController{}, "*:Profile")
	beego.AutoRouter(&controllers.NumberController{})

	//beego.Run()
	httpport := beego.AppConfig.String("httpport")
	beego.Run(httpport)
}
