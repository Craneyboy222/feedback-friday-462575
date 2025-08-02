import React from 'react';

interface TableProps {
  headers: string[];
  data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className=\