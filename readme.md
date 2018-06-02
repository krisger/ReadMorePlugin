<h2>Instalation</h2>
<p>Get from "src" folder plugin "readmore.js" add it to you header under jQuery library included</p>
<p>This plugin requires jQuery to be included</p>
<p>Wrap text to div which is you want to appear as readmore text and add you own unique class example in index.html</p>
<p>
	Call plugin with:
</p>
<p>
<pre lang="no-highlight">
<code>

//For single read more button itialise plugin like under
$(function(){
	$(".read-more").readmore();
});

//For multiple read more button initialise plugin like under
$(function(){
	$(".read-more").readmore({multiple:true});
});

</code>
</pre>

</p>
<p>
	Or pass new options to plugin:
</p>
<p>
<pre lang="no-highlight">
<code>
$(function(){
	$(".read-more").readmore({
		hideText: "Any text"
		readText: "New text",
		isTextShown: true,
		effect: true,
		effectOption: "slow",
		buttonClasses: "btn-primary opacity-rollover",
		id: "read-more-action"
	});
});
</code>
</pre>
</p>
<h2><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"></a>License</h2>
<p>This project is licensed under the MIT License - for this read License.md file</p>