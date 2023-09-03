import React from 'react';

export default function page({
  params: { blogId },
}: {
  params: { blogId: Array<string> };
}) {
  console.log('🚀 ~ file: page.tsx:9 ~ blogId:', blogId);

  return <div>page {blogId}</div>;
}
