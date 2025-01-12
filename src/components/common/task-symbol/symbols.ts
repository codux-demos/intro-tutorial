import EmptySymbol from '../../../assets/empty-symbol.svg?react';
import AddSymbol from '../../../assets/add-symbol.svg?react';
import ComponentSymbol from '../../../assets/component-symbol.svg?react';
import InspectSymbol from '../../../assets/inspect-symbol.svg?react';
import EditSymbol from '../../../assets/edit-symbol.svg?react';
import HomeSymbol from '../../../assets/home-symbol.svg?react';
import PropsSymbol from '../../../assets/props-symbol.svg?react';
import ReloadSymbol from '../../../assets/reload-symbol.svg?react';
import StylesSymbol from '../../../assets/styles-symbol.svg?react';
import DivSymbol from '../../../assets/div-symbol.svg?react';
import ChevronSymbol from '../../../assets/chevron-symbol.svg?react';
import PreviewSymbol from '../../../assets/preview-symbol.svg?react';
import HamburgerSymbol from '../../../assets/hamburger-symbol.svg?react';
import MoreSymbol from '../../../assets/more-symbol.svg?react';
import BranchSymbol from '../../../assets/branch-symbol.svg?react';
import CommitSymbol from '../../../assets/commit-symbol.svg?react';
import SyncSymbol from '../../../assets/sync-symbol.svg?react';
import PagesSymbol from '../../../assets/pages-symbol.svg?react';
import EditModeSymbol from '../../../assets/edit-mode.svg?react';
import AddPageSymbol from '../../../assets/add-page-symbol.svg?react';

export const symbols = {
    empty: EmptySymbol,
    add: AddSymbol,
    component: ComponentSymbol,
    inspect: InspectSymbol,
    edit: EditSymbol,
    home: HomeSymbol,
    props: PropsSymbol,
    reload: ReloadSymbol,
    styles: StylesSymbol,
    div: DivSymbol,
    chevron: ChevronSymbol,
    preview: PreviewSymbol,
    responsivePreview: PreviewSymbol,
    hamburger: HamburgerSymbol,
    more: MoreSymbol,
    branch: BranchSymbol,
    commit: CommitSymbol,
    sync: SyncSymbol,
    pages: PagesSymbol,
    editMode: EditModeSymbol,
    addPage: AddPageSymbol,
};

export type SymbolName = keyof typeof symbols;
