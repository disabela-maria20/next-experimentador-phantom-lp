import Document, { Html, Head, Main, NextScript } from 'next/document'

class Documentos extends Document {
    render() {
        return(
            <Html lang="pt_BR">
                <Head>
                    <script dangerouslySetInnerHTML={{ __html: `(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
                    ;r.type="text/javascript"
                    ;r.integrity="sha384-tzcaaCH5+KXD4sGaDozev6oElQhsVfbJvdi3//c2YvbY02LrNlbpGdt3Wq4rWonS"
                    ;r.crossOrigin="anonymous";r.async=true
                    ;r.src="https://cdn.amplitude.com/libs/amplitude-8.5.0-min.gz.js"
                    ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
                    console.log("[Amplitude] Error: could not load SDK")}}
                    ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
                    ;function s(e,t){e.prototype[t]=function(){
                    this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
                    var o=function(){this._q=[];return this}
                    ;var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"]
                    ;for(var c=0;c<a.length;c++){s(o,a[c])}n.Identify=o;var u=function(){this._q=[]
                    ;return this}
                    ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
                    ;for(var p=0;p<l.length;p++){s(u,l[p])}n.Revenue=u
                    ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
                    ;function v(e){function t(t){e[t]=function(){
                    e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
                    for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
                    e=(!e||e.length===0?"$default_instance":e).toLowerCase()
                    ;if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])
                    }return n._iq[e]};e.amplitude=n})(window,document);

                    amplitude.getInstance().init("72d4f18dbb445c3109592dfe63c7d4de");` }} />
                    <script dangerouslySetInnerHTML={{__html: `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KCF5KJP');</script>`}} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCF5KJP"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                </body>
            </Html>
        )
    }
}

export default Documentos