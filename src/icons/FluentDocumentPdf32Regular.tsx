import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const FluentDocumentPdf32Regular: React.FC<Props> = props => {
  const {size, color} = props;
  return (
    <Svg width={size} height={size} color={color} viewBox="0 0 32 32" {...props}>
      <Path
        fill="currentColor"
        d="M9 16a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H9Zm1.5 3H10v-1h.5a.5.5 0 0 1 0 1Zm3.5-2a1 1 0 0 1 1-1h.5a3.5 3.5 0 1 1 0 7H15a1 1 0 0 1-1-1v-5Zm2 3.915a1.5 1.5 0 0 0 0-2.83v2.83ZM20 22v-5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-2v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0ZM6 5v8H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v1a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-1h1a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V9.828a3 3 0 0 0-.879-2.12l-4.828-4.83A3 3 0 0 0 18.172 2H9a3 3 0 0 0-3 3Zm3-1h7v5a3 3 0 0 0 3 3h5v1H8V5a1 1 0 0 1 1-1ZM8 27v-1h16v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1ZM24 9.828V10h-5a1 1 0 0 1-1-1V4h.172a1 1 0 0 1 .707.293l4.828 4.828a1 1 0 0 1 .293.707ZM5 15h22v9H5v-9Z"
      />
    </Svg>
  );
};

FluentDocumentPdf32Regular.defaultProps = {
  size: 24,
  color: '#000',
};

export default FluentDocumentPdf32Regular;
