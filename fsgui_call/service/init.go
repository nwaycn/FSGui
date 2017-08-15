package service

import (
	"fmt"

	//"os"

	//"callback/cb_web/entity"

	"nway/utils/nway_db_connection"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	_ "github.com/lib/pq"
)

var (
	o           orm.Ormer
	tablePrefix string       // 表前缀
	UserService *userService // 用户服务
	RoleService *roleService // 角色服务
	//EnvService        *envService        // 发布环境服务
	//ServerService     *serverService     // 服务器服务
	//ProjectService    *projectService    // 项目服务
	//MailService       *mailService       // 邮件服务
	//TaskService       *taskService       // 任务服务
	//DeployService     *deployService     // 部署服务
	//RepositoryService *repositoryService // 仓库服务
	SystemService *systemService
	//ActionService     *actionService // 系统动态
)

func Init() {

	tablePrefix = beego.AppConfig.String("db.prefix")

	//orm.RegisterDataBase("default", "mysql", dsn)
	dbstring := beego.AppConfig.String("dbstring")
	fmt.Println("dbstring:", dbstring)
	NwayConn := nwayconnection.NewDb()
	bConnected := NwayConn.Init(dbstring)

	if bConnected == true {

		NwayConn.GetConn()
	} else {
		beego.Error("Can not link to database")
		return
	}

	if beego.AppConfig.String("runmode") == "dev" {
		orm.Debug = true
	}

	//o = orm.NewOrm()
	//orm.RunCommand()

	// 创建代码
	//os.MkdirAll(GetProjectsBasePath(), 0755)
	//os.MkdirAll(GetTasksBasePath(), 0755)

	// 初始化服务对象
	go MonitorConcurrent()
	initService()
}

func MonitorConcurrent() {

}

func initService() {
	UserService = &userService{}
	RoleService = &roleService{}
	//	EnvService = &envService{}
	//	ServerService = &serverService{}
	//	ProjectService = &projectService{}
	//	MailService = &mailService{}
	//	TaskService = &taskService{}
	//	DeployService = &deployService{}
	//	RepositoryService = &repositoryService{}
	//	SystemService = &systemService{}
	//	ActionService = &actionService{}
}

// 返回真实表名
func tableName(name string) string {
	return tablePrefix + name
}

func debug(v ...interface{}) {
	beego.Debug(v...)
}

// 任务单根目录
func GetTasksBasePath() string {
	return fmt.Sprintf(beego.AppConfig.String("data_dir") + "/tasks")
}

// 所有项目根目录
func GetProjectsBasePath() string {
	return fmt.Sprintf(beego.AppConfig.String("data_dir") + "/projects")
}

// 任务单目录
func GetTaskPath(id int) string {
	return fmt.Sprintf(GetTasksBasePath()+"/task-%d", id)
}

// 某个项目的代码目录
func GetProjectPath(name string) string {
	return GetProjectsBasePath() + "/" + name
}

func concatenateError(err error, stderr string) error {
	if len(stderr) == 0 {
		return err
	}
	return fmt.Errorf("%v: %s", err, stderr)
}

func DBVersion() string {
	var lists []orm.ParamsList
	o.Raw("SELECT VERSION()").ValuesList(&lists)
	return lists[0][0].(string)
}
