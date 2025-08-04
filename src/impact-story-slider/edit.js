// ✅ edit.js
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	PanelColorSettings,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	SelectControl,
	Button,
	TextControl,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import "./editor.scss";

const DIRECTIONS = [
	{ label: "Left", value: "left" },
	{ label: "Right", value: "right" },
	{ label: "Up", value: "up" },
	{ label: "Down", value: "down" },
];

export default function Edit({ attributes, setAttributes }) {
	const {
		mediaURL,
		mediaID,
		text,
		fontSize,
		direction,
		textColor,
		backgroundColor,
		heading,
		headingEnabled,
	} = attributes;

	const blockProps = useBlockProps();

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Media & Content Settings">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ mediaURL: media.url, mediaID: media.id })
							}
							allowedTypes={["image", "video"]}
							render={({ open }) => (
								<Button onClick={open} isSecondary>
									{mediaURL ? "Replace Media" : "Upload Media"}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label="Slide Heading"
						value={heading}
						onChange={(val) => setAttributes({ heading: val })}
					/>
					<SelectControl
						label="Direction"
						value={direction}
						options={DIRECTIONS}
						onChange={(val) => setAttributes({ direction: val })}
					/>
					<RangeControl
						label="Font Size"
						value={fontSize}
						onChange={(val) => setAttributes({ fontSize: val })}
						min={10}
						max={72}
					/>
				</PanelBody>

				<PanelColorSettings
					title="Color Settings"
					initialOpen={true}
					colorSettings={[
						{
							value: textColor,
							onChange: (val) => setAttributes({ textColor: val }),
							label: "Text Color",
						},
						{
							value: backgroundColor,
							onChange: (val) => setAttributes({ backgroundColor: val }),
							label: "Background Color",
						},
					]}
				/>
			</InspectorControls>

			<div {...blockProps} className={`impact-slider direction-${direction}`}>
				{heading && headingEnabled && (
					<h2 style={{ color: textColor }}>{heading}</h2>
				)}
				{mediaURL &&
					(mediaURL.endsWith(".mp4") ? (
						<video src={mediaURL} autoPlay loop muted playsInline />
					) : (
						<img src={mediaURL} alt="Impact Media" />
					))}
				<RichText
					tagName="p"
					value={text}
					onChange={(val) => setAttributes({ text: val })}
					placeholder="Enter story text..."
					style={{ fontSize, color: textColor, backgroundColor }}
				/>
			</div>
		</Fragment>
	);
}
