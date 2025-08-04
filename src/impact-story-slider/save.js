import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		mediaURL,
		text,
		fontSize,
		textColor,
		backgroundColor,
		heading,
		direction,
		headingEnabled,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
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
			<RichText.Content
				tagName="p"
				value={text}
				style={{ fontSize, color: textColor, backgroundColor }}
			/>
		</div>
	);
}
