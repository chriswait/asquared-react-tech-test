// Quite proud of this!
// CSS still lacks reliable support for both clamping text to a single line
// AND rendering a text ellipsis at the end

// Here we take advantage of how absolutely positioned elements flow
// to render all the text on a single line, and then hide the overflow and show an ellipsis

export const TruncatedLine = ({ text }: { text: string }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        position: 'absolute', // remove from the document flow, so the text flows onto one line
        whiteSpace: 'nowrap', // force the text not to wrap
        textOverflow: 'ellipsis', // show an ellipsis at the end of the line
        maxWidth: '100%', // prevent horizontal overflow
        overflow: 'hidden', // hide overflowing content
      }}
    >
      {text}
    </div>
  </div>
)
