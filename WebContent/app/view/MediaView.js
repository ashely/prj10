/*
 * File: app/view/MyPanel.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */
var hideToolbar = function(){

	  var toolbar = Ext.ComponentQuery.query('toolbar')[0];
	  
	  if(!toolbar.isHidden())
		  toolbar.setHidden(true);
	  else
		  toolbar.setHidden(false);
	  
};

var itemFactory = new Array();

var addIntroItem = function(idx){
	var item = {
			xtype: "dataview",
			scrollable: false,
			store: "medias",
			itemTpl: '<div><tpl if="xindex=='+idx+'"><img src="{profile_image_url}" onClick="hideToolbar()" /></tpl></div>'
	};

	return item;
}; /* init carousel page */ 

for(var idx=1; idx<7; idx++ ){
	itemFactory.push(addIntroItem(idx));
};

Ext.define('GNApp.view.MediaView', {
    extend: 'Ext.Panel',
    xtype: 'mediaView',
    config: {
        id: 'MainView',
        title: 'media',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                id: 'TweetToolbar',
                docked: 'top',
                title: 'Gallery123',
                
                items: [
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'Back',
                        ui: 'back',
                        text: 'Back',
                        action: 'back'
                    }
                ],
            },
            {
                xtype: 'dataview',
                id: 'TweetData',
                padding: '12px',
                itemTpl: [
                    '<div style="width: 60px; float: left;">',
                    '  <img src="{profile_image_url}">',
                    '</div>',
                ], /* Thumbnail image binding to #MainView */
                
                store: 'medias',
            },
            {
                xtype: 'carousel',
                id: 'TweetPreview',
	          	direction: 'horizontal',
	          	indicator: true,
	          	
	          	padding: '12px',
          	    
                items: itemFactory, /* Carousel image binding function to #TweetPreview */

            }
        ]
    }
});