// .remarkrc.js

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import {remarkHeadingId} from 'remark-custom-heading-id';

module.exports = {
    plugins: [
        remarkGfm,
        remarkHeadingId,
        remarkMath
        
    ],
  };
  