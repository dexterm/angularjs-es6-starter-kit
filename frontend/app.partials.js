
const partialsModule = angular.module('app.partials', [
    //'ui-router' pplace any module names here
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
partialsModule.run(function($templateCache) {

    function requireAll(requireContext) {
        return requireContext.keys().map(function(val){
            console.log('val', val);
            return {
                // tpl will hold the value of your html string because thanks to wepbpack "raw-loader" **important**
                tpl:requireContext(val),

                //name is just the filename
                name : val.split('/').pop()
                //name with full path
                //name: val
            }
        });
    }

    // here "../" is my app folder root
    // tplc is the naming convention of the templates
    //require.context('../', true, /\.htm\.html$/);

    //let modules = requireAll(require.context("../", true, /\.html$/));
     //console.debug(modules);
    let modules = requireAll( require.context("../", true, /\.(.htm|html)$/) );
    modules.map(function (val) {
        console.log(val.name, '=====', val.tpl)
        $templateCache.put(val.name, val.tpl);
    })

});


export default partialsModule;


