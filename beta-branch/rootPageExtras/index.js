//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
//

//
// Google Analytics
//
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-94271-11']);
_gaq.push(['_setDomainName', '.phonegap.com']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

//
// Syntax Highlighting
//
(function() {
    window.addEventListener('load', function() {
        prettyPrint();
    }, false);
})();


//
// API <select>
//
(function() {
    window.addEventListener('load', function() {
        var $select = document.getElementById('subheader').getElementsByTagName('select')[0];
        if (!$select)
            return;

        $select.addEventListener('change', function(e) {
            document.location = '#' + this.options[this.selectedIndex].value;
        }, false);
    }, false);
})();

/*
(function() {
    $("#sidebar a").click(function(event) {
        location.href = this.href + "?s=" + $("#sidebar").scrollTop();
        return false;
    });

})();

(function() {
    if (location.search) {
        var parts = location.search.split(/[&=\?]/g);
        var i;
        for (i = 0; i < parts.length; i++) {
            if (parts[i] === "s" && parts[i + 1]) {
                var dist = parseInt(parts[i + 1]);
                $("#sidebar").scrollTop(dist);
            }
        }
    }
})();
*/