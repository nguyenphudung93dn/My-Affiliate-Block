import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const TEMPLATE = [ [ 'core/columns', { backgroundColor: 'yellow', verticalAlignment: 'center' }, [
    [ 'core/column', { templateLock: 'all' }, [
        [ 'core/image' ],
    ] ],
    [ 'core/column', { templateLock: 'all' }, [
        [ 'create-block/my-affiliate-block', { placeholder: 'Enter side content...' } ],
    ] ],
] ] ];

registerBlockType('create-block/my-affiliate-container-block', {
    title: __( 'Container', 'my-affiliate-block' ),
    category: 'design',

	/**
	 * @see ./edit.js
	 */
	edit( { className } ) {
        
        return(
            <div className={ className }>
                <InnerBlocks
                    template={ TEMPLATE }
                    templateLock="all"
                />
            </div>
        )
    },

	/**
	 * @see ./save.js
	 */
	save() {
        const blockProps = useBlockProps.save();
        return(
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        )
    },
});