function n(s,e){var t=new XMLHttpRequest;t.open("GET",`http://39.98.244.18/api/Common/${s}`),t.onreadystatechange=function(){this.readyState===this.DONE&&(this.status===200?e(null,t.response):e({status:t.status,message:t.responseText},null))},t.send()}export{n as g};
