Titanium.UI.setBackgroundColor('#FFF');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


var PINK = '#FF4E54';
var GREEN = "#00cc00";
var RED = '#cc0000';
var YELLOW = '#eedd00';
var GRAY = '#cccccc';

var statusList = [
	{
		status: "●",
		color: GREEN,
		title: "Open Now^^"
	},
	{
		status: "▲",
		color: YELLOW,
		title: "Attention!"
	},
	{
		status: "×",
		color: RED,
		title: "Closed."
	},

];

var shops = [
 	{
    name: "マルイチベーグル",
    days: "03456",
    time_open: 660,
    time_close: 1080,
    category: "ベーグル",
  },
  {
    name: "利庵",
    days: "03456",
    time_open: 690,
    time_close: 1080,//わからん
    category: "そば",
  },

  {
    name: "バーガーマニア",
    days: "0123456",
    time_open: 690,
    time_close: 960,
    category: "ハンバーガー",
    url: "http://tabelog.com/tokyo/A1316/A131602/13047335/",
  },
  {
    name: "手打そば佶更",
    days: "013456",
    time_open: 720,
    time_close: 840,
    category: "そば",
  },

  {
    name: "バンブー",
    days: "0123456",
    time_open: 690,//わからん
    time_close: 960,//わからん
    category: "ホテルラウンジ",
  },
  {
    name: "shirogame imakara",
    days: "0123456",
    time_open: 690,
    time_close: 960,//わからん
    category: "定食、ダイニング",
  },

  {
    name: "とんかつ すずき",
    days: "123456",
    time_open: 690,
    time_close: 960,//わからん
    category: "とんかつ",
  },
  {
    name: "てっぱんやき むー",
    days: "2345",
    time_open: 720,
    time_close: 810,
    category: "ステーキ、鉄板焼き",
  },
  {
    name: "タイダイニング　ソイ7",
    days: "0123456",
    time_open: 690,
    time_close: 900,
    category: "タイ料理、タイカレー",
  },
  {
    name: "馳走 麹屋 ",
    days: "123456",
    time_open: 690,
    time_close: 840,
    category: "和食",
  },

  {
    name: "デニッシュカフェ",
    days: "0123456",
    time_open: 660,
    time_close: 900,
    category: "パキスタン料理、カレー",
  },
  {
    name: "PER REGALO",
    days: "2345",
    time_open: 660,
    time_close: 870,
    category: "ピザ、イタリアンブッフェ",
  },
  {
    name: "あかね食堂　芳月堂",
    days: "123456",
    time_open: 690,
    time_close: 900,
    category: "ダイニングバー",
	url: "http://r.tabelog.com/tokyo/A1316/A131602/13109917/",
  },
  {
    name: "韓国家庭料理 はな 白金店",
    days: "123456",
    time_open: 690,
    time_close: 840,
    category: "韓国料理",
    url: "http://r.tabelog.com/tokyo/A1316/A131602/13037615/",
  },

];




// 今の日時の取得
  var today = null;
//今日が何曜日か
  var week = new Array("日", "月", "火", "水", "木", "金", "土");
//今の分
var time_now = null;

  
//各お店のステータスを調べる
function checkOpen(shop){
  var open_status = 2;
    //今日やってるかどうか
    if (shop.days.indexOf("" + today.getDay()) != -1) {
      //かつ、今の時間やってるかどうか
      if (shop.time_open < time_now && time_now < shop.time_close){
        open_status = 0;
        if ((shop.time_close - time_now) < 60) {
        open_status = 1;
        }
      }
    }

  return open_status;
}

  
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Just A Lunch',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    title:'Tab 1',
    window:win1
});

function dataset(){
	var data = [];
	
	today = new Date();
	time_now = (today.getHours())*60 + today.getMinutes();
	
	for(var j = 0; j < statusList.length; j++) {
		
		/*
		var row = Ti.UI.createTableViewRow({
			height: 44,
			width: '100%',
			left: 0,
			title: statusList[j].title,
			textAlign: "center",
			color: "#fffffff",
			backgroundColor: statusList[j].color
			//layout: 'horizontal'
		});
		data.push(row);
		*/

		for (var i = 0; i < shops.length; i++) {
			var open_status = checkOpen(shops[i]);		
	
			if(open_status == j) {
				var row = Ti.UI.createTableViewRow({
					height: 44,
					width: '100%',
					left: 0,
					url: shops[i].url,
					backgroundColor: statusList[j].color,
					borderColor: "#fff",
					borderRadius: 2,
					//layout: 'horizontal'
				});
				
				var nameLabel = Ti.UI.createLabel({
					text: shops[i].name,
					left: '3%',
					top: '0%',
					width: '55%',
					height: 44,
					font:{fontWeight:'bold', fontSize:14},
					color: '#fff'
				});
				row.add(nameLabel);
				
				/*
				var categoryLabel = Ti.UI.createLabel({
					text: shops[i].category,
					left: '3%',
					top: '3%',
					width: '50%',
					height: 44,
					font:{fontWeight:'bold',fontSize:12},
					color: '#999999'
				});
				row.add(categoryLabel);
				*/
				
				if(open_status != 2){
					//var lost_hour = parseInt((shops[i].time_close - time_now)/60); 
					var lost_minit = (shops[i].time_close - time_now); 
					var commentLabel = Ti.UI.createLabel({
						text: "あと" + lost_minit + "分",
						left: '60%',//'2%',
						width: '32%',
						height: 44,
						font:{fontWeight:'bold', fontSize:12},
						color: '#fff'
					});
					row.add(commentLabel);
				} else if(open_status == 2 && shops[i].days.indexOf(today.getDay())) {
					//var lost_hour = parseInt((shops[i].time_close - time_now)/60); 
					var lost_minit = (shops[i].time_open - time_now);
					if(lost_minit < 0){
						lost_minit = lost_minit + 2400;
					} 
					if(lost_minit < 60) {
						var commentLabel = Ti.UI.createLabel({
							text: "あと" + lost_minit + "分",
							left: '60%',//'2%',
							width: '32%',
							height: 44,
							font:{fontWeight:'bold', fontSize:12},
							color: '#fff'
						});
						row.add(commentLabel);
					}
				}
				
				var statusLabel = Ti.UI.createLabel({
					text: statusList[open_status].status,
					color: '#fff',//statusList[open_status].color,
					right: '3%',
					width: '5%',
					top: 0,
					height: 44,
					font:{fontWeight:'bold',fontSize:16},
				});
				row.add(statusLabel);
			
				data.push(row);
			}
		}
	}
	
	return data;
}



var tableMenu = Ti.UI.createTableView({
	data: dataset(),
	width: '100%',
	left: 0,
	style:Ti.UI.iPhone.TableViewStyle.PLAIN,
	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
	id: 'tableMenu'
});

tableMenu.addEventListener('click', function(e){
	if(!isAndroid()){
		Ti.Platform.openURL(e.rowData.url);
	}
});
win1.add(tableMenu);


var interval = setInterval(function(){
	tableMenu.data = dataset();
}, 60000);

function isAndroid(){
	if(Ti.Platform.osname == 'android') {
		return true;
	} else {
		return false;
	}
}

//
//  add tabs
//
if(!isAndroid()) {
	win1.hideTabBar();
	win1.hideNavBar();
}
tabGroup.addTab(tab1);  


// open tab group
tabGroup.open();
