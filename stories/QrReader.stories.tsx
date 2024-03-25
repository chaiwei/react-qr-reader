import React, { useState } from 'react';
// import { Story } from '@storybook/react';
import type { Meta, StoryObj } from '@storybook/react';

import { ViewFinder } from './ViewFinder';

import { QrReader } from '../src';
import { QrReaderProps } from '../src/types';
import { Result } from '@zxing/library';



const styles = {
  container: {
    width: '400px',
    margin: 'auto',
  },
};

export const Page = ({ ...props }: QrReaderProps) =>  {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Result>();
  const [toggleCamera, setToggleCamera] = useState<boolean>(false);

  return (
    <div style={styles.container}>
        {toggleCamera && (
            <QrReader
                {...props}
                onResult={(result, error) => {
                if (!!result) {
                    setData(result);
                }

                if (error) {
                    setError(error.message);
                }
                }}
            />
        )}
        <p>The value is: {JSON.stringify(data, null, 2)}</p>
        <p>The error is: {error}</p>
        <button onClick={() => setToggleCamera(!toggleCamera)}>{!toggleCamera? "Open" : "Close"} Scanner</button>
    </div>
  );
};

export const ScanCode = Page.bind({});

ScanCode.props = {
  ViewFinder,
  videoId: 'video',
  scanDelay: 500,
  constraints: {
    facingMode: 'user',
  },
};

const meta = {
    title: 'Browser QR Reader',
    component: Page,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStory: Story = {
    args: {
      //👇 The args you need here will depend on your component
    },
  };