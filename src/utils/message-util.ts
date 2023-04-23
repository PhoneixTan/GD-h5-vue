import { Dialog, Notify } from 'vant'

export const messageMethod = {
	/**
	 * 消息提示
	 * @param message
	 * @param duration
	 * @param onClose
	 */
	info(message: string, duration?: number, onClose?: () => void) {
		return Notify({ type: 'primary', message, duration: duration ?? 3000, onClose })
	},
	/**
	 * 错误消息提示
	 * @param message
	 * @param duration
	 * @param onClose
	 */
	error(message: string, duration?: number, onClose?: () => void) {
		return Notify({ type: 'warning', message, duration: duration ?? 3000, onClose })
	},
	/**
	 * 警告消息提示
	 * @param message
	 * @param duration
	 * @param onClose
	 */
	warning(message: string, duration?: number, onClose?: () => void) {
		return Notify({ type: 'danger', message, duration: duration ?? 3000, onClose })
	},
	/**
	 * 成功消息提示
	 * @param message
	 * @param duration
	 * @param onClose
	 */
	success(message: string, duration?: number, onClose?: () => void) {
		return Notify({ type: 'success', message, duration: duration ?? 3000, onClose })
	}
}

export const confirmMethod = {
	/**
	 * 提示弹框
	 * @param title
	 * @param ok
	 * @param cancel
	 */
	info(title: string, ok?: () => void, cancel?: () => void) {
		Dialog.confirm({
			title: title
		})
			.then(() => {
				// on confirm
				if (ok) {
					ok()
				}
			})
			.catch(() => {
				// on cancel
				if (cancel) {
					cancel()
				}
			})
	}
}
