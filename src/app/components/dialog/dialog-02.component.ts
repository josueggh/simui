import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
	selector: 'sim-dialog-02',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
		NgIcon,
		HlmIconDirective,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Confirm dialog with icon</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideCircleAlert" size="sm"></ng-icon>
					</div>
					<hlm-dialog-header>
						<h2 class="text-lg font-semibold">Are you sure?</h2>
						<p hlmDialogDescription>
							Take a moment to review the details provided to ensure you understand the implications.
						</p>
					</hlm-dialog-header>
				</div>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog02Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog02Code = `
import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
	selector: 'sim-dialog-02',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
		NgIcon,
		HlmIconDirective,
	],
	template: \`
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Confirm dialog with icon</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideCircleAlert" size="sm"></ng-icon>
					</div>
					<hlm-dialog-header>
						<h2 class="text-lg font-semibold">Are you sure?</h2>
						<p hlmDialogDescription>
							Take a moment to review the details provided to ensure you understand the implications.
						</p>
					</hlm-dialog-header>
				</div>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" (click)="closeDialog()">Cancel</button>
					<button hlmBtn type="submit" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog02Component {
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}
`;
