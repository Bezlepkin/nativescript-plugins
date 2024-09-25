declare class CropView extends UIView implements UIGestureRecognizerDelegate, UIScrollViewDelegate {
  static alloc(): CropView; // inherited from NSObject

  static appearance(): CropView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): CropView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CropView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CropView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CropView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CropView; // inherited from UIAppearance

  static new(): CropView; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

  gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

  gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

  gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

  scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

  scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

  scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

  scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

  scrollViewDidScroll(scrollView: UIScrollView): void;

  scrollViewDidScrollToTop(scrollView: UIScrollView): void;

  scrollViewDidZoom(scrollView: UIScrollView): void;

  scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

  scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

  scrollViewWillBeginDragging(scrollView: UIScrollView): void;

  scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

  scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

  self(): this;

  viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class CropViewController extends UIViewController {
  static alloc(): CropViewController; // inherited from NSObject

  static new(): CropViewController; // inherited from NSObject
}

declare class DrawingCanvasView extends UIView {
  static alloc(): DrawingCanvasView; // inherited from NSObject

  static appearance(): DrawingCanvasView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): DrawingCanvasView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DrawingCanvasView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): DrawingCanvasView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DrawingCanvasView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): DrawingCanvasView; // inherited from UIAppearance

  static new(): DrawingCanvasView; // inherited from NSObject
}

declare class HiglihtedButton extends UIButton {
  static alloc(): HiglihtedButton; // inherited from NSObject

  static appearance(): HiglihtedButton; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): HiglihtedButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HiglihtedButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): HiglihtedButton; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HiglihtedButton; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): HiglihtedButton; // inherited from UIAppearance

  static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): HiglihtedButton; // inherited from UIButton

  static buttonWithType(buttonType: UIButtonType): HiglihtedButton; // inherited from UIButton

  static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): HiglihtedButton; // inherited from UIButton

  static new(): HiglihtedButton; // inherited from NSObject

  static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): HiglihtedButton; // inherited from UIButton

  static systemButtonWithPrimaryAction(primaryAction: UIAction): HiglihtedButton; // inherited from UIButton
}

declare class ImageButton extends UIButton {
  static alloc(): ImageButton; // inherited from NSObject

  static appearance(): ImageButton; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): ImageButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ImageButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ImageButton; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ImageButton; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ImageButton; // inherited from UIAppearance

  static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): ImageButton; // inherited from UIButton

  static buttonWithType(buttonType: UIButtonType): ImageButton; // inherited from UIButton

  static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): ImageButton; // inherited from UIButton

  static new(): ImageButton; // inherited from NSObject

  static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): ImageButton; // inherited from UIButton

  static systemButtonWithPrimaryAction(primaryAction: UIAction): ImageButton; // inherited from UIButton
}

interface PhotoEditorDelegate {
  canceledEditing(): void;

  doneEditingWithImage(image: UIImage): void;
}
declare var PhotoEditorDelegate: {
  prototype: PhotoEditorDelegate;
};

declare var PhotoEditorVersionNumber: number;

declare var PhotoEditorVersionString: interop.Reference<number>;

declare class PhotoEditorView extends UIView {
  static alloc(): PhotoEditorView; // inherited from NSObject

  static appearance(): PhotoEditorView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): PhotoEditorView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PhotoEditorView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PhotoEditorView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PhotoEditorView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PhotoEditorView; // inherited from UIAppearance

  static new(): PhotoEditorView; // inherited from NSObject
}

declare class PhotoEditorViewController extends UIViewController implements UIGestureRecognizerDelegate, UITextViewDelegate {
  static alloc(): PhotoEditorViewController; // inherited from NSObject

  static new(): PhotoEditorViewController; // inherited from NSObject

  image: UIImage;

  photoEditorDelegate: PhotoEditorDelegate;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

  gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

  gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

  gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

  scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

  scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

  scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

  scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

  scrollViewDidScroll(scrollView: UIScrollView): void;

  scrollViewDidScrollToTop(scrollView: UIScrollView): void;

  scrollViewDidZoom(scrollView: UIScrollView): void;

  scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

  scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

  scrollViewWillBeginDragging(scrollView: UIScrollView): void;

  scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

  scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

  self(): this;

  textViewDidBeginEditing(textView: UITextView): void;

  textViewDidChange(textView: UITextView): void;

  textViewDidChangeSelection(textView: UITextView): void;

  textViewDidEndEditing(textView: UITextView): void;

  textViewEditMenuForTextInRangeSuggestedActions(textView: UITextView, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

  textViewShouldBeginEditing(textView: UITextView): boolean;

  textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

  textViewShouldEndEditing(textView: UITextView): boolean;

  textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

  textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

  textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

  textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

  textViewWillDismissEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

  textViewWillPresentEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

  viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TextView extends UIView implements UITextViewDelegate {
  static alloc(): TextView; // inherited from NSObject

  static appearance(): TextView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): TextView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TextView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): TextView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TextView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): TextView; // inherited from UIAppearance

  static new(): TextView; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

  scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

  scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

  scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

  scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

  scrollViewDidScroll(scrollView: UIScrollView): void;

  scrollViewDidScrollToTop(scrollView: UIScrollView): void;

  scrollViewDidZoom(scrollView: UIScrollView): void;

  scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

  scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

  scrollViewWillBeginDragging(scrollView: UIScrollView): void;

  scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

  scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

  self(): this;

  textViewDidBeginEditing(textView: UITextView): void;

  textViewDidChange(textView: UITextView): void;

  textViewDidChangeSelection(textView: UITextView): void;

  textViewDidEndEditing(textView: UITextView): void;

  textViewEditMenuForTextInRangeSuggestedActions(textView: UITextView, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

  textViewShouldBeginEditing(textView: UITextView): boolean;

  textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

  textViewShouldEndEditing(textView: UITextView): boolean;

  textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

  textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

  textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

  textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

  textViewWillDismissEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

  textViewWillPresentEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

  viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TypingCanvasView extends UIView {
  static alloc(): TypingCanvasView; // inherited from NSObject

  static appearance(): TypingCanvasView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): TypingCanvasView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TypingCanvasView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): TypingCanvasView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TypingCanvasView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): TypingCanvasView; // inherited from UIAppearance

  static new(): TypingCanvasView; // inherited from NSObject
}
