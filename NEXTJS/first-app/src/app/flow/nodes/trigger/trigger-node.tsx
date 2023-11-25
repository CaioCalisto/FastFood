import { Handle, NodeProps, NodeToolbar, Position } from 'reactflow'
import { useState } from 'react'
import styles from '../node.module.scss'
import { MdFlashOn } from 'react-icons/md'
import EditTrigger from '@/app/flow/menus/edit/edit-trigger'
import AddNode from '@/app/flow/menus/add/add-node'

type TriggerNodeProps = {
  name: string
}

function TriggerNode({ id, data }: NodeProps<TriggerNodeProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NodeToolbar isVisible={open}>
        <EditTrigger />
      </NodeToolbar>
      <div onClick={() => setOpen(!open)} className={styles.node}>
        <div className={styles.icon}>
          <MdFlashOn />
        </div>
        <div className={styles.labels}>
          <p className={styles.typeLabel}>Trigger</p>
          <p className={styles.nameLabel}>{data.name}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <AddNode nodeId={id} />
      </div>
      <Handle type={'source'} position={Position.Bottom} />
    </>
  )
}

export default TriggerNode
export type { TriggerNodeProps }
