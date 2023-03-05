export const GLOBAL_ITEMS = {
  // bddy created items
  example_item: {
    item_id: "example_item",
    item_name: "Example Item",
    item_description: "This is an example item",
    item_price: 100,
    onUse: (cb: (err: null | string, res: any) => void, args: Object[]) => {
      cb(null, args);
    }
  },
  bddy: {
    item_id: "bddy",
    item_name: "bddy",
    item_description: "purchase **the** bddy",
    item_price: 69,
    onUse: (cb: (err: null | string, res: any) => void, args: Object[]) => {
      cb(null, args);
    }
  },
  // neon created items
  pc: {
    item_id: "pc",
    item_name: "PC",
    item_description: "purchase a PC",
    item_price: 420
  },
  mouse: {
    item_id: "mouse",
    item_name: "Mouse",
    item_description: "purchase a mouse - for your PC",
    item_price: 200
  },
  dj_pass: {
    item_id: "music_pass",
    item_name: "Music Pass",
    item_description: "purchase a DJ pass + **exclusive** music channel",
    item_price: 80000
  },
  vip: {
    item_id: "vip",
    item_name: "VIP",
    item_description: "purchase a VIP pass - **exclusive** VIP channel",
    item_price: 90000
  },
  gun: {
    item_id: "gun",
    item_name: "Hunting Rifle from fortnite",
    item_description: "purchase a gun to hunt",
    item_price: 1200
  },
  // suggested by 610788461028573194
  replit: {
    item_id: "replit",
    item_name: "Replit",
    item_description: "purchase Replit",
    item_price: 10000000
  }
};

export type GlobalItem = {
  item_id: string;
  item_name: string;
  item_description: string;
  item_price: number;
  onUse: (cb: (err: null | string, res: any) => void, args: Object[]) => void;
};

export interface LocalItem {
  item_id: string;
  item_amount: number;
}
