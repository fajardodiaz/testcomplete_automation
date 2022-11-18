function Seleccionar_Articulo(){
  var page = Sys.Browser("*").Page("*")
  page.Wait();
  var Articulo = page.FindChildByXPath("//a[contains(text(),'Samsung galaxy s6')]")
  Articulo.Click();
}