import { ItemImportDetail } from './itemImportDetail';

export class ItemImport {
  id:Number;
  date:Date;
  total:Number;
  details: ItemImportDetail[];
}
