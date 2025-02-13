// 当页面加载完成隐藏加载中
function isload(){
	let loading = document.getElementById("loading");
	hidden("loading");
	// 显示
	document.getElementById("main").style.display = 'inline';
}
/******************************************************************************
  * 函数名称:hidden(id)
  * 函数功能:隐藏某个元素
  * 输入参数:id为要隐藏元素id
  * 返回值:无
  * 其他说明:
******************************************************************************/
function hidden(id){
	let hidele = document.getElementById(id);
	hidele.style.display = 'none';
}

 /******************************************************************************
  * 函数名称:resetInput()
  * 函数功能:重置所有的input输入框
  * 输入参数:无
  * 返回值:无
  * 其他说明:
******************************************************************************/
function resetInput(){
	let allinput = document.getElementsByTagName("input");
	for(var i=0;i<allinput.length;i++){
		allinput[i].value = "";
	}
}
 /******************************************************************************
  * 函数名称:convert()
  * 函数功能:主转换函数
  * 输入参数:无
  * 返回值:W（瓦）
  * 其他说明:
******************************************************************************/
function convert(){
	let W = HMmWhtoW(Number(document.getElementById('H').value),Number(document.getElementById('M').value),Number(document.getElementById('mWh').value));
	if(isNaN(W)) {
		return '错误';
	}
	return W;
}
//-----------功率计算-----------\\
 /******************************************************************************
  * 函数名称:mWhToWh(mWh)
  * 函数功能:将mWh（毫瓦时）转换为Wh（瓦时）
  * 输入参数:mWh为要转换的毫瓦时
  * 返回值:转换后的Wh（瓦时）
  * 其他说明:
******************************************************************************/
function mWhToWh(mWh){
	let mWhnum = Number(mWh);
	let Wh = mWhnum/1000;
	return Wh;
}

 /******************************************************************************
  * 函数名称:WhandTimeToW(Wh, Time)
  * 函数功能:将Wh（瓦时）和时间转换为W（瓦）
  * 输入参数:Wh为瓦时，Time为时间（小时）
  * 返回值:W为转换后的W（瓦）
  * 其他说明:
******************************************************************************/
function WhandTimeToW(Wh, Time){
	let Whnum = Number(Wh);
	let Timenum = Number(Time);
	let W = Whnum/Timenum;
	return W;
}

 /******************************************************************************
  * 函数名称:HandMtoH(H, M)
  * 函数功能:将H（小时）和M（分钟）转换为H（小时）
  * 输入参数:H为小时，M为分钟
  * 返回值:H（小时）
  * 其他说明:
******************************************************************************/
function HandMtoH(H, M){
	let Hnum = Number(H);
	let Mnum = Number(M);
	let HM = Hnum * 60;
	let AM = HM + Mnum;
	let AH = AM/60;
	return AH
}

 /******************************************************************************
  * 函数名称:HMmWhtoW(H, M, mWh)
  * 函数功能:将时（H）、分（M）、mWh（毫瓦时）转换为W（瓦）
  * 输入参数:H为时，M为分，mWh为毫瓦时
  * 返回值:W（瓦）
  * 其他说明:
******************************************************************************/
function HMmWhtoW(H, M, mWh){
	let Wh = mWhToWh(mWh);
	let HM = HandMtoH(H,M);
	let W = WhandTimeToW(Wh,HM);
	return W;
}