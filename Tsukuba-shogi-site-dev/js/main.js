        function dispElement(elementIndex)
        {
                var obj = document.getElementsByClassName("hidden")[elementIndex];
                if(!obj)
                {
                        return;
                }
                obj.classList.toggle("visible");
                smoothScrol(obj);
                return true;
        }; 
        function smoothScrol(obj,lastOffSet){
                var top = window.innerHeight - obj.getBoundingClientRect().top;
                if( top > (window.innerHeight/2) || window.pageYOffset == lastOffSet){
                        return;
                }
                lastOffSet = window.pageYOffset;
                window.scrollTo(0, window.pageYOffset + 1);
                setTimeout(function(){smoothScrol(obj,lastOffSet)},1);
                /// current 0 y 520 0-520<0 1 1-520<0 2
        };                   
