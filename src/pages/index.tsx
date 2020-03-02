import React, { useEffect } from "react"
import Prism from 'prismjs';
import raw from "raw.macro"
import ReactMarkdown from 'react-markdown'

export const API = build(raw("./md/api.md"));
export const CleanUp = build(raw("./md/cleanup.md"));
export const Controller = build(raw("./md/controller.md"));
export const Docker = build(raw("./md/docker.md"));
export const FAQ = build(raw("./md/faq.md"));
export const Overview = build(raw("./md/overview.md"));
export const Worker = build(raw("./md/worker.md"));

function build (source: string):React.FC {
    return () => {
        useEffect(() => {
            return Prism.highlightAll();
        }, []);
        return (<ReactMarkdown source={source} escapeHtml={false}/>)
    }
}
