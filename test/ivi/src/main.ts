import { update, List, createRoot, Root } from "ivi";
import { htm as html } from "@ivi/htm";

interface Item {
  id: string;
  date: string;
  index: number;
  classname: string;
  title: string;
  content: string;
  footer: string;
}

const template = (items: Item[]) => List(items, item => item.id, item => html`
  <section data-id=${item.id} data-date=${item.date} data-index=${item.index}>
    <div class=${item.classname} style="padding-right: 10px;">
      <div class="title">${item.title}</div>
      <div class="content">${item.content}</div>
      <div class="footer">${item.footer}</div>
    </div>
  </section>
`);

let root: Root | null = null;

export const render = (rootEl: HTMLElement, items: Item[]) => {
  root ??= createRoot(rootEl);
  update(root, template(items));
};