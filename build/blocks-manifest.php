<?php
// This file is generated. Do not modify it manually.
return array(
	'impact-story-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/impact-story-slider',
		'version' => '0.1.0',
		'title' => 'Impact Story Slider',
		'category' => 'widgets',
		'icon' => 'slides',
		'description' => 'Image Story Slider - Reusable impact story slider with media, text styling, and directional control slides with parallax',
		'example' => array(
			
		),
		'attributes' => array(
			'numSlides' => array(
				'type' => 'number',
				'default' => 3
			),
			'slideDirection' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'showHeaders' => array(
				'type' => 'boolean',
				'default' => true
			),
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'mediaURL' => array(
				'type' => 'string'
			),
			'mediaID' => array(
				'type' => 'number'
			),
			'text' => array(
				'type' => 'string'
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'textColor' => array(
				'type' => 'string'
			),
			'backgroundColor' => array(
				'type' => 'string'
			),
			'heading' => array(
				'type' => 'string'
			),
			'isFullWidth' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'supports' => array(
			'align' => true,
			'color' => array(
				'text' => true,
				'background' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			),
			'html' => false
		),
		'textdomain' => 'impact-story-slider',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
