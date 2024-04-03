import { Node, DomNode, DomNodeType, NodeType, NodeConverter, Paint, Vector, ColorStop, ConvertNodeOption } from './types';
export declare class BaseConverter<NType extends NodeType = NodeType> implements NodeConverter<NType> {
    convert(node: Node<NType>, dom: DomNode, parentNode?: Node, option?: ConvertNodeOption): Promise<DomNode>;
    createDomNode(type: DomNodeType): DomNode;
    convertStyle(node: Node<NType>, dom: DomNode, option?: ConvertNodeOption): Promise<DomNode>;
    convertEffects(node: Node<NType>, dom: DomNode, option?: ConvertNodeOption): Promise<DomNode>;
    convertFills(node: Node<NType>, dom: DomNode, option?: ConvertNodeOption): Promise<DomNode>;
    convertStrokes(node: Node<NType>, dom: DomNode, option?: ConvertNodeOption): Promise<DomNode>;
    convertLinearGradient(gradient: Paint, dom?: DomNode): string;
    convertRadialGradient(gradient: Paint, dom?: DomNode): string;
    getGradientSize(gradientHandlePositions: Vector[]): number;
    getRadialGradientPosition(gradientHandlePositions: Vector[]): string;
    getGradientDirection(gradientHandlePositions: Vector[]): string;
    getGradientStops(gradientStops: ColorStop[]): string | Array<DomNode>;
}
export default BaseConverter;
