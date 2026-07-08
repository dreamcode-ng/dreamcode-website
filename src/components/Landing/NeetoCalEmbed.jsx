import React, { useEffect } from 'react';

export default function NeetoCalEmbed({
  scriptUrl = 'https://dreamcodesoft.neetocal.com/javascript/embed.js',
  embedId = '30b41c15-ba54-4a38-aa32-3960ebe73330',
  organization = 'dreamcodesoft',
  height = '100%',
}) {
  useEffect(() => {
    if (!scriptUrl || !embedId || !organization) return undefined;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.neetoCal) {
        window.neetoCal.embed({
          type: 'inline',
          id: embedId,
          organization,
          elementSelector: '#inline-embed-container',
          styles: { height, width: '100%' },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      const embedContainer = document.getElementById('inline-embed-container');
      if (embedContainer) {
        embedContainer.innerHTML = '';
      }
    };
  }, [scriptUrl, embedId, organization, height]);

  return (
    <div
      id="inline-embed-container"
      style={{ height, width: '100%' }}
    ></div>
  );
}
