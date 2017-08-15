var provinces = [
	{"ProID": 1, "name": "北京市",    zip:"010","fbid":0}, 
	{"ProID": 2, "name": "天津市",    zip:"022","fbid":0},
	{"ProID": 3, "name": "河北省",    zip:""},
	{"ProID": 4, "name": "山西省",    zip:""}, 
	{"ProID": 5, "name": "内蒙古",    zip:""}, 
	{"ProID": 6, "name": "辽宁省",    zip:""}, 
	{"ProID": 7, "name": "吉林省",    zip:""}, 
	{"ProID": 8, "name": "黑龙江省",  zip:""}, 
	{"ProID": 9, "name": "上海市",    zip:"021","fbid":0},
	{"ProID": 10,"name": "江苏省",    zip:""}, 
	{"ProID": 11,"name": "浙江省",    zip:""},
	{"ProID": 12,"name": "安徽省",    zip:""},
	{"ProID": 13,"name": "福建省",    zip:""}, 
	{"ProID": 14,"name": "江西省",    zip:""}, 
	{"ProID": 15,"name": "山东省",    zip:""},
	{"ProID": 16,"name": "河南省",    zip:""}, 
	{"ProID": 17,"name": "湖北省",    zip:""}, 
	{"ProID": 18,"name": "湖南省",    zip:""}, 
	{"ProID": 19,"name": "广东省",    zip:""},
	{"ProID": 20,"name": "海南省",    zip:""}, 
	{"ProID": 21,"name": "广西壮族",  zip:""},
	{"ProID": 22,"name": "甘肃省",    zip:""}, 
	{"ProID": 23,"name": "陕西省",    zip:""}, 
	{"ProID": 24,"name": "新疆",      zip:""},
	{"ProID": 25,"name": "青海省",    zip:""}, 
	{"ProID": 26,"name": "宁夏",      zip:""}, 
	{"ProID": 27,"name": "重庆市",    zip:"023","fbid":0}, 
	{"ProID": 28,"name": "四川省",    zip:""}, 
	{"ProID": 29,"name": "贵州省",    zip:""}, 
	{"ProID": 30,"name": "云南省",    zip:""},
	{"ProID": 31,"name": "西藏自治区",zip:""},
	//{"ProID": 32,"name": "台湾省","zip":"00886","fbid":0},
	{"ProID": 33,"name": "澳门特别行政区","zip":"00853","fbid":0}, 
	{"ProID": 34,"name": "香港特别行政区","zip":"00852","fbid":0}];

var cities = [
    {name:"邯郸市",    ProID:3,zip:"0310"},
    {name:"石家庄市",  ProID:3,zip:"0311"},
    {name:"辛集市",    ProID:3,zip:"0311"},
    {name:"保定市",    ProID:3,zip:"0312"},
    {name:"定州市",    ProID:3,zip:"0312"},
    {name:"张家口",    ProID:3,zip:"0313"},
    {name:"承德市",    ProID:3,zip:"0314"},
    {name:"唐山市",    ProID:3,zip:"0315"},
    {name:"乐亭市",    ProID:3,zip:"0315"},
    {name:"廊坊市",    ProID:3,zip:"0316"},
    {name:"沧州市",    ProID:3,zip:"0317"},
    {name:"衡水市",    ProID:3,zip:"0318"},
    {name:"邢台市",    ProID:3,zip:"0319"},
    {name:"秦皇岛市",  ProID:3,zip:"0335"},

    {name:"朔州市",    ProID:4,zip:"0349"},
    {name:"忻州市",    ProID:4,zip:"0350"},
    {name:"太原市",    ProID:4,zip:"0351"},
	{name:"大同市",    ProID:4,zip:"0352"},
	{name:"阳泉市",    ProID:4,zip:"0353"},
	{name:"晋中市",    ProID:4,zip:"0354"},
	{name:"长治市",    ProID:4,zip:"0355"},
	{name:"晋城市",    ProID:4,zip:"0356"},
	{name:"临汾市",    ProID:4,zip:"0357"},
	{name:"吕梁市",    ProID:4,zip:"0358"},
	{name:"运城市",    ProID:4,zip:"0359"},

	{name:"呼伦贝尔市",ProID:5,zip:"0470"},
	{name:"呼和浩特市",ProID:5,zip:"0471"},
	{name:"包头市",    ProID:5,zip:"0472"},
	{name:"乌海市",    ProID:5,zip:"0473"},
	{name:"乌兰察布",  ProID:5,zip:"0474"},
	{name:"通辽市",    ProID:5,zip:"0475"},
	{name:"赤峰市",    ProID:5,zip:"0476"},
	{name:"鄂尔多斯市",ProID:5,zip:"0477"},
	{name:"巴彦淖尔市",ProID:5,zip:"0478"},
	{name:"锡林郭勒盟",ProID:5,zip:"0479"},
	{name:"兴安盟",    ProID:5,zip:"0482"},
	{name:"阿拉善盟市",ProID:5,zip:"0483"},

	{name:"沈阳市",    ProID:6,zip:"024" },
	{name:"铁岭市",    ProID:6,zip:"0410"},
	{name:"大连市",    ProID:6,zip:"0411"},
	{name:"鞍山市",    ProID:6,zip:"0412"},
	{name:"抚顺市",    ProID:6,zip:"0413"},
	{name:"本溪市",    ProID:6,zip:"0414"},
	{name:"丹东市",    ProID:6,zip:"0415"},
	{name:"锦州市",    ProID:6,zip:"0416"},
	{name:"营口市",    ProID:6,zip:"0417"},
	{name:"阜新市",    ProID:6,zip:"0418"},
	{name:"辽阳市",    ProID:6,zip:"0419"},
	{name:"朝阳市",    ProID:6,zip:"0421"},
	{name:"盘锦市",    ProID:6,zip:"0427"},
	{name:"葫芦岛市",  ProID:6,zip:"0429"},

	{name:"吉林市",    ProID:7,zip:"0423"},
	{name:"长春市",    ProID:7,zip:"0431"},
	{name:"延边",      ProID:7,zip:"0433"},
	{name:"四平市",    ProID:7,zip:"0434"},
	{name:"公主岭",    ProID:7,zip:"0434"},
	{name:"通化市",    ProID:7,zip:"0435"},
	{name:"梅河口",    ProID:7,zip:"0435"},
	{name:"白城市",    ProID:7,zip:"0436"},
	{name:"辽源市",    ProID:7,zip:"0437"},
	{name:"松原市",    ProID:7,zip:"0438"},
	{name:"白山市",    ProID:7,zip:"0439"},

	{name:"哈尔滨市",  ProID:8,zip:"0451"},
	{name:"齐齐哈尔市",ProID:8,zip:"0452"},
	{name:"牡丹江市",  ProID:8,zip:"0453"},
	{name:"佳木斯市",  ProID:8,zip:"0454"},
	{name:"绥化市",    ProID:8,zip:"0455"},
	{name:"黑河市",    ProID:8,zip:"0456"},
	{name:"大兴安岭市",ProID:8,zip:"0457"},
	{name:"伊春市",    ProID:8,zip:"0458"},
	{name:"大庆市",    ProID:8,zip:"0459"},
	{name:"七台河市",  ProID:8,zip:"0464"},
	{name:"鸡西市",    ProID:8,zip:"0467"},
	{name:"鹤岗市",    ProID:8,zip:"0468"},
	{name:"双鸭山市",  ProID:8,zip:"0469"},

	{name:"南京市",   ProID:10,zip:"025" },
	{name:"无锡市",   ProID:10,zip:"0510"},
	{name:"镇江市",   ProID:10,zip:"0511"},
	{name:"苏州市",   ProID:10,zip:"0512"},
	{name:"南通市",   ProID:10,zip:"0513"},
	{name:"扬州市",   ProID:10,zip:"0514"},
	{name:"盐城市",   ProID:10,zip:"0515"},
	{name:"徐州市",   ProID:10,zip:"0516"},
	{name:"淮安市",   ProID:10,zip:"0517"},
	{name:"连云港市", ProID:10,zip:"0518"},
	{name:"常州市",   ProID:10,zip:"0519"},
	{name:"泰州市",   ProID:10,zip:"0523"},
	{name:"宿迁市",   ProID:10,zip:"0527"},

	{name:"衢州市",   ProID:11,zip:"0570"},
	{name:"杭州市",   ProID:11,zip:"0571"},
	{name:"湖州市",   ProID:11,zip:"0572"},
	{name:"嘉兴市",   ProID:11,zip:"0573"},
	{name:"宁波市",   ProID:11,zip:"0574"},
	{name:"绍兴市",   ProID:11,zip:"0575"},
	{name:"台州市",   ProID:11,zip:"0576"},
	{name:"温州市",   ProID:11,zip:"0577"},
	{name:"丽水市",   ProID:11,zip:"0578"},
	{name:"金华市",   ProID:11,zip:"0579"},
	{name:"舟山市",   ProID:11,zip:"0580"},

    {name:"滁州市",   ProID:12,zip:"0550"},
	{name:"合肥市",   ProID:12,zip:"0551"},
	{name:"蚌埠市",   ProID:12,zip:"0552"},
	{name:"芜湖市",   ProID:12,zip:"0553"},
	{name:"淮南市",   ProID:12,zip:"0554"},
	{name:"马鞍山市", ProID:12,zip:"0555"},
	{name:"安庆市",   ProID:12,zip:"0556"},
	{name:"宿州市",   ProID:12,zip:"0557"},
	{name:"阜阳市",   ProID:12,zip:"0558"},
	{name:"亳州市",   ProID:12,zip:"0558"},
	{name:"黄山市",   ProID:12,zip:"0559"},
	{name:"淮北市",   ProID:12,zip:"0561"},
	{name:"铜陵市",   ProID:12,zip:"0562"},
	{name:"宣城市",   ProID:12,zip:"0563"},
	{name:"六安市",   ProID:12,zip:"0564"},
	{name:"池州市",   ProID:12,zip:"0566"},

	{name:"福州市",   ProID:13,zip:"0591"},
	{name:"平潭市",   ProID:13,zip:"0591"},
	{name:"厦门市",   ProID:13,zip:"0592"},
	{name:"宁德市",   ProID:13,zip:"0593"},
	{name:"莆田市",   ProID:13,zip:"0594"},
	{name:"泉州市",   ProID:13,zip:"0595"},
	{name:"漳州市",   ProID:13,zip:"0596"},
	{name:"龙岩市",   ProID:13,zip:"0597"},
	{name:"三明市",   ProID:13,zip:"0598"},
	{name:"南平市",   ProID:13,zip:"0599"},

	{name:"新余市",   ProID:14,zip:"0790"},
	{name:"南昌市",   ProID:14,zip:"0791"},
	{name:"九江市",   ProID:14,zip:"0792"},
	{name:"上饶市",   ProID:14,zip:"0793"},
	{name:"抚州市",   ProID:14,zip:"0794"},
	{name:"宜春市",   ProID:14,zip:"0795"},
	{name:"吉安市",   ProID:14,zip:"0796"},
	{name:"赣州市",   ProID:14,zip:"0797"},
	{name:"景德镇市", ProID:14,zip:"0798"},
	{name:"萍乡市",   ProID:14,zip:"0799"},
	{name:"鹰潭市",   ProID:14,zip:"0701"},


	{name:"菏泽市",   ProID:15,zip:"0530"},
	{name:"济南市",   ProID:15,zip:"0531"},
	{name:"青岛市",   ProID:15,zip:"0532"},
	{name:"淄博市",   ProID:15,zip:"0533"},
	{name:"德州市",   ProID:15,zip:"0534"},
	{name:"烟台市",   ProID:15,zip:"0535"},
	{name:"潍坊市",   ProID:15,zip:"0536"},
	{name:"济宁市",   ProID:15,zip:"0537"},
	{name:"泰安市",   ProID:15,zip:"0538"},
	{name:"临沂市",   ProID:15,zip:"0539"},
	{name:"滨州市",   ProID:15,zip:"0543"},
	{name:"东营市",   ProID:15,zip:"0546"},
	{name:"枣庄市",   ProID:15,zip:"0623"},
	{name:"威海市",   ProID:15,zip:"0631"},
	{name:"日照市",   ProID:15,zip:"0633"},
	{name:"莱芜市",   ProID:15,zip:"0634"},
	{name:"聊城市",   ProID:15,zip:"0635"},

	{name:"商丘市",   ProID:16,zip:"0370"},
	{name:"郑州市",   ProID:16,zip:"0371"},
	{name:"安阳市",   ProID:16,zip:"0372"},
	{name:"新乡市",   ProID:16,zip:"0373"},
	{name:"许昌市",   ProID:16,zip:"0374"},
	{name:"平顶山市", ProID:16,zip:"0375"},
	{name:"信阳市",   ProID:16,zip:"0376"},
	{name:"南阳市",   ProID:16,zip:"0377"},
	{name:"开封市",   ProID:16,zip:"0378"},
	{name:"洛阳市",   ProID:16,zip:"0379"},
	{name:"济源市",   ProID:16,zip:"0391"},
	{name:"焦作市",   ProID:16,zip:"0391"},
	{name:"鹤壁市",   ProID:16,zip:"0392"},
	{name:"濮阳市",   ProID:16,zip:"0393"},
	{name:"周口市",   ProID:16,zip:"0394"},
	{name:"漯河市",   ProID:16,zip:"0395"},
	{name:"驻马店市", ProID:16,zip:"0396"},
	{name:"三门峡市", ProID:16,zip:"0398"},

	{name:"武汉市",   ProID:17,zip:"027" },
	{name:"襄阳市",   ProID:17,zip:"0710"},
	{name:"鄂州市",   ProID:17,zip:"0711"},
	{name:"孝感市",   ProID:17,zip:"0712"},
	{name:"黄冈市",   ProID:17,zip:"0713"},
	{name:"黄石市",   ProID:17,zip:"0714"},
	{name:"咸宁市",   ProID:17,zip:"0715"},
	{name:"荆州市",   ProID:17,zip:"0716"},
	{name:"宜昌市",   ProID:17,zip:"0717"},
	{name:"恩施",     ProID:17,zip:"0718"},
	{name:"十堰市",   ProID:17,zip:"0719"},
	{name:"神农架",   ProID:17,zip:"0719"},
	{name:"随州市",   ProID:17,zip:"0722"},
	{name:"荆门市",   ProID:17,zip:"0724"},
	{name:"潜江市",   ProID:17,zip:"0728"},
	{name:"仙桃市",   ProID:17,zip:"0728"},
	{name:"天门市",   ProID:17,zip:"0728"},

	{name:"岳阳市",   ProID:18,zip:"0730"},
	{name:"长沙市",   ProID:18,zip:"0731"},
    {name:"株洲市",   ProID:18,zip:"0731"},
	{name:"湘潭市",   ProID:18,zip:"0732"},
	{name:"衡阳市",   ProID:18,zip:"0734"},
	{name:"郴州市",   ProID:18,zip:"0735"},
	{name:"常德市",   ProID:18,zip:"0736"},
	{name:"益阳市",   ProID:18,zip:"0737"},
	{name:"娄底市",   ProID:18,zip:"0738"},
	{name:"邵阳市",   ProID:18,zip:"0739"},
	{name:"湘西",     ProID:18,zip:"0743"},
	{name:"张家界市", ProID:18,zip:"0744"},
	{name:"怀化市",   ProID:18,zip:"0745"},
	{name:"永州市",   ProID:18,zip:"0746"},

	{name:"广州市",   ProID:19,zip:"020" },
    {name:"江门市",   ProID:19,zip:"0750"},
	{name:"韶关市",   ProID:19,zip:"0751"},
	{name:"惠州市",   ProID:19,zip:"0752"},
	{name:"梅州市",   ProID:19,zip:"0753"},
	{name:"汕头市",   ProID:19,zip:"0754"},
	{name:"深圳市",   ProID:19,zip:"0755"},
	{name:"珠海市",   ProID:19,zip:"0756"},
	{name:"佛山市",   ProID:19,zip:"0757"},
	{name:"肇庆市",   ProID:19,zip:"0758"},
	{name:"湛江市",   ProID:19,zip:"0759"},
	{name:"中山市",   ProID:19,zip:"0760"},
	{name:"河源市",   ProID:19,zip:"0762"},
	{name:"清远市",   ProID:19,zip:"0763"},
	{name:"云浮市",   ProID:19,zip:"0766"},
	{name:"潮州市",   ProID:19,zip:"0768"},
	{name:"东莞市",   ProID:19,zip:"0769"},
	{name:"汕尾市",   ProID:19,zip:"0660"},
	{name:"阳江市",   ProID:19,zip:"0662"},
	{name:"揭阳市",   ProID:19,zip:"0663"},
	{name:"茂名市",   ProID:19,zip:"0668"},

	{name:"海口市",   ProID:20,zip:"0898"},
	{name:"三沙市",   ProID:20,zip:"0898"},
	{name:"儋州市",   ProID:20,zip:"0898"},
	{name:"五指山",   ProID:20,zip:"0898"},
	{name:"三亚市",   ProID:20,zip:"0899"},
	{name:"其他地区", ProID:20,zip:"0898"},

	{name:"防城港市", ProID:21,zip:"0770"},
	{name:"南宁市",   ProID:21,zip:"0771"},
	{name:"崇左市",   ProID:21,zip:"0771"},
	{name:"柳州市",   ProID:21,zip:"0772"},
	{name:"来宾市",   ProID:21,zip:"0772"},
	{name:"桂林市",   ProID:21,zip:"0773"},
	{name:"梧州市",   ProID:21,zip:"0774"},
	{name:"贺州市",   ProID:21,zip:"0774"},
	{name:"玉林市",   ProID:21,zip:"0775"},
	{name:"贵港市",   ProID:21,zip:"0775"},
	{name:"百色市",   ProID:21,zip:"0776"},
	{name:"钦州市",   ProID:21,zip:"0777"},
	{name:"河池市",   ProID:21,zip:"0778"},
	{name:"北海市",   ProID:21,zip:"0779"},

	{name:"兰州市",   ProID:22,zip:"0931"},
	{name:"临夏市",   ProID:22,zip:"0930"},
	{name:"定西市",   ProID:22,zip:"0932"},
	{name:"平凉市",   ProID:22,zip:"0933"},
	{name:"庆阳市",   ProID:22,zip:"0934"},
	{name:"金昌市",   ProID:22,zip:"0935"},
	{name:"武威市",   ProID:22,zip:"0935"},
	{name:"张掖市",   ProID:22,zip:"0936"},
	{name:"嘉峪关市", ProID:22,zip:"0937"},
	{name:"酒泉市",   ProID:22,zip:"0937"},
	{name:"天水市",   ProID:22,zip:"0938"},
	{name:"陇南市",   ProID:22,zip:"0939"},
	{name:"甘南市",   ProID:22,zip:"0941"},
	{name:"白银市",   ProID:22,zip:"0943"},

	{name:"西安市",   ProID:23,zip:"029" },
	{name:"咸阳市",   ProID:23,zip:"029" },
	{name:"杨陵",     ProID:23,zip:"029" },
	{name:"延安市",   ProID:23,zip:"0911"},
	{name:"榆林市",   ProID:23,zip:"0912"},
	{name:"渭南市",   ProID:23,zip:"0913"},
	{name:"商洛市",   ProID:23,zip:"0914"},
	{name:"安康市",   ProID:23,zip:"0915"},
	{name:"汉中市",   ProID:23,zip:"0916"},
	{name:"宝鸡市",   ProID:23,zip:"0917"},
	{name:"铜川市",   ProID:23,zip:"0919"},

	{name:"乌鲁木齐市",        ProID:24,zip:"0991"},
	{name:"哈密市",            ProID:24,zip:"0902"},
	{name:"和田地区",          ProID:24,zip:"0903"},
	{name:"昆玉",              ProID:24,zip:"0903"},
	{name:"北屯",              ProID:24,zip:"0906"},
	{name:"克孜勒苏柯尔克孜",  ProID:24,zip:"0908"},
	{name:"博尔塔拉",          ProID:24,zip:"0909"},
	{name:"双河市",            ProID:24,zip:"0909"},
	{name:"克拉玛依市",        ProID:24,zip:"0990"},
	{name:"吐鲁番市",          ProID:24,zip:"0995"},
	{name:"石河子",            ProID:24,zip:"0993"},
	{name:"巴音郭楞",          ProID:24,zip:"0996"},
	{name:"铁门关市",          ProID:24,zip:"0996"},
	{name:"阿克苏市",          ProID:24,zip:"0997"},
	{name:"昌吉回族自治州",    ProID:24,zip:"0997"},
	{name:"阿拉尔",            ProID:24,zip:"0997"},
	{name:"喀什地",            ProID:24,zip:"0998"},
	{name:"图木舒克",          ProID:24,zip:"0998"},
	{name:"伊犁哈萨克",        ProID:24,zip:"0999"},

	{name:"西宁市",   ProID:25,zip:"0971"},
	{name:"海北",     ProID:25,zip:"0970"},
	{name:"海东市",   ProID:25,zip:"0972"},
	{name:"黄南",     ProID:25,zip:"0973"},
	{name:"海南",     ProID:25,zip:"0974"},
	{name:"果洛",     ProID:25,zip:"0975"},
	{name:"玉树",     ProID:25,zip:"0976"},
	{name:"海西",     ProID:25,zip:"0977"},

	{name:"银川市",   ProID:26,zip:"0951"},
	{name:"石嘴山市", ProID:26,zip:"0952"},
	{name:"吴忠市",   ProID:26,zip:"0953"},
	{name:"固原市",   ProID:26,zip:"0954"},
	{name:"中卫市",   ProID:26,zip:"0955"},

	{name:"成都市",   ProID:28,zip:"028" },
	{name:"资阳市",   ProID:28,zip:"028" },
	{name:"眉山市",   ProID:28,zip:"028" },
	{name:"攀枝花市", ProID:28,zip:"0812"},
	{name:"自贡市",   ProID:28,zip:"0813"},
	{name:"绵阳市",   ProID:28,zip:"0816"},
	{name:"南充市",   ProID:28,zip:"0817"},
	{name:"达州市",   ProID:28,zip:"0818"},	
	{name:"遂宁市",   ProID:28,zip:"0825"},
	{name:"广安市",   ProID:28,zip:"0826"},
	{name:"巴中市",   ProID:28,zip:"0827"},
	{name:"泸州市",   ProID:28,zip:"0830"},
	{name:"宜宾市",   ProID:28,zip:"0831"},
	{name:"内江市",   ProID:28,zip:"0832"},
	{name:"乐山市",   ProID:28,zip:"0833"},
	{name:"凉山",     ProID:28,zip:"0834"},
	{name:"雅安市",   ProID:28,zip:"0835"},
	{name:"甘孜",     ProID:28,zip:"0836"},
	{name:"阿坝",     ProID:28,zip:"0837"},
	{name:"德阳市",   ProID:28,zip:"0838"},
	{name:"广元市",   ProID:28,zip:"0839"},


	{name:"贵阳市",   ProID:29,zip:"0851"},
	{name:"遵义市",   ProID:29,zip:"0852"},
	{name:"安顺市",   ProID:29,zip:"0853"},
	{name:"黔南",     ProID:29,zip:"0854"},
	{name:"黔东南",   ProID:29,zip:"0855"},
	{name:"铜仁",     ProID:29,zip:"0856"},
	{name:"毕节",     ProID:29,zip:"0857"},
	{name:"六盘水市", ProID:29,zip:"0858"},
	{name:"黔西南",   ProID:29,zip:"0859"},

	{name:"昆明市",         ProID:30,zip:"0871"},
	{name:"昭通市",         ProID:30,zip:"0870"},
	{name:"大理",           ProID:30,zip:"0872"},
	{name:"红河哈尼族",     ProID:30,zip:"0873"},
	{name:"曲靖市",         ProID:30,zip:"0874"},
	{name:"保山市",         ProID:30,zip:"0875"},
	{name:"文山壮族苗族",   ProID:30,zip:"0876"},
	{name:"玉溪市",         ProID:30,zip:"0877"},
	{name:"楚雄",           ProID:30,zip:"0878"},
	{name:"普洱市",         ProID:30,zip:"0879"},
	{name:"临沧市",         ProID:30,zip:"0883"},
	{name:"怒江傈僳族",     ProID:30,zip:"0886"},
	{name:"迪庆藏族",       ProID:30,zip:"0887"},
	{name:"丽江市",         ProID:30,zip:"0888"},
	{name:"西双版纳",       ProID:30,zip:"0691"},
	{name:"德宏傣族景颇族", ProID:30,zip:"0692"},


	{name:"拉萨市",   ProID:31,zip:"0891"},
	{name:"日喀则市", ProID:31,zip:"0892"},
	{name:"山南市",   ProID:31,zip:"0893"},
	{name:"林芝市",   ProID:31,zip:"0894"},
	{name:"昌都市",   ProID:31,zip:"0895"},
	{name:"那曲地区", ProID:31,zip:"0896"},
	{name:"阿里地区", ProID:31,zip:"0897"}];

function byId(id){
	return document.getElementById(id);
}
//列出城市列表
function getCityList(id){
	var output = "<ul>"; 
	for(i = 0; i < provinces.length; i++ ) 
	{
		if(provinces[i].fbid == 0)
		{
		  output += "<li><i class=\"fa fa-minus\"></i><input id="+provinces[i].ProID+" data-code="+provinces[i].zip+" value=\"0\" class=\"checkno\" type=\"checkbox\"><label class=\"sradio\" for="+provinces[i].ProID+"></label><span data-code="+provinces[i].zip+">"+provinces[i].name+"</span></li>"; 
		}else{
		  output += "<li><i class=\"fa fa-plus icon-plus\"></i><input id="+provinces[i].ProID+" data-code="+provinces[i].zip+" value=\"1\" class=\"checkno\" type=\"checkbox\"><label class=\"sradio\" for="+provinces[i].ProID+"></label><span>"+provinces[i].name+"</span>";	
		  output +=   "<ul class=\"pArea\">";
	         for(var item in cities)
	         {  
	            if(provinces[i].ProID == cities[item].ProID)
	            {
	             output += "<li><input id="+cities[item].zip+item+" data-code="+cities[item].zip+" value=\"0\" class=\"checkno\" type=\"checkbox\"><label class=\"sradio\"  for="+cities[item].zip+item+"></label><span data-code="+cities[item].zip+">"+cities[item].name+"</span></li>";	
	            }         	
	         }
	      output +="</ul>";
	      output +="</li>";
		}
	}
	output += "</ul>"; 
	byId('city-list').innerHTML = output;
};

jQuery(document).ready(function(){
    jQuery('#selectArea').click(function(){		
		if(jQuery("#areaInput").val()==""){
			$("#check-on").attr({"checked":true})
            checkAll();
		}else{
			$("#check-off").attr({"checked":true})
		    inputArr();		
		};
		jQuery(".area-list").fadeIn(); 		
	});  

    jQuery(document.body).on("click",".icon-plus",function(){
        jQuery(this).siblings(".pArea").toggle("fast",function(){
          if(!jQuery(this).is(":hidden")){
          	jQuery(this).siblings(".icon-plus").addClass("fa-minus");
          }else{
          	jQuery(this).siblings(".icon-plus").removeClass("fa-minus");
          }
        }).parent().siblings().children(".pArea").hide();
    });

    jQuery(document.body).on("click","#city-list>ul>li>.checkno",function(){
        if(jQuery(this).is(":checked"))
        {
        	jQuery(this).siblings(".pArea").find(".checkno").each(function(){
        		jQuery(this).attr("checked",true);
        	});        	
        }else{
            jQuery(this).siblings(".pArea").find(".checkno").each(function(){
        		jQuery(this).attr("checked",false);
        	}); 	
        }
    });
   
    function inputArr() {
    	str=jQuery("#areaInput").val(); 
         var strs= new Array();
         strs=str.split(","); 
         for (i=0;i<strs.length;i++ )
         {
         	jQuery("input[data-code='"+strs[i]+"']").attr("checked",true);
         	jQuery("input[data-code='"+strs[i]+"']").parent().parent().siblings(".checkno").attr("checked",true);
         }  	     
    }

    jQuery(document.body).on("click",".check-ok",function(){
        var tselect = "";
        jQuery("#city-list .checkno:checked").each(function(){
        	var datacode = jQuery(this).siblings('span').data("code"),punctuation=",";
        	if(typeof(datacode) == "undefined"){
               datacode ="";
               punctuation ="";               
        	}else{
        	   punctuation =",";        	       
        	}         	        
            tselect += (tselect.length>0 ? punctuation : "" ) + datacode;	    
        });
        if(confirm("你是否要这样设置区域？")==true)
        {
          jQuery("#areaInput").val(tselect);	
          jQuery(".area-list").hide();
        }
       	
        
    });
   
   
});

function checkAll(){
  jQuery("#city-list .checkno").each(function(){
    jQuery(this).attr({"checked":true,"disabled":true});
  });
};
function cancleAll(){
  jQuery("#areaInput").attr("placeholder","请设置你的路由策略！");
  jQuery("#city-list .checkno").each(function(){
   jQuery(this).attr({"checked":false,"disabled":false});
  });
};