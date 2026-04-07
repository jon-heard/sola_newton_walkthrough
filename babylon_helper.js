window._b = BABYLON;
window._e = {};

function startBabylon(canvasId, setupScene)
{
	_b.myCanvas = document.getElementById(canvasId);
	_b.myEngine = new BABYLON.Engine(_b.myCanvas, true);
	_b.myScene = new BABYLON.Scene(_b.myEngine);
	setupScene();
	_b.myEngine.runRenderLoop(() =>
	{
		_b.myScene.render();
	});
	window.addEventListener('resize', () =>
	{
		_b.myEngine.resize();
	});	
}
_e.showDbg = function()
{
	_b.myScene.debugLayer.show();
};
