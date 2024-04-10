/*<FILE_LICENSE>
 * Azos (A to Z Application Operating System) Framework
 * The A to Z Foundation (a.k.a. Azist) licenses this file to you under the MIT license.
 * See the LICENSE file in the project root for more information.
</FILE_LICENSE>*/

import { normalizeMsg, writeConsole } from "./log.js";
import { ABSTRACT } from "./coreconsts.js";
import { Module } from "./modules.js";

/**
 * ILog contract sets protocol for writing log messages to various loggers/sinks.
 * To use logger, you need to either use DI to resolve ref using linker or obtain app-wide logger ref via "app.log" prop,
 * then call {@link write} passing a log message.
 *
 * To create custom logging/sinks, you implement this contract by deriving from it and overriding {@link _doWrite()}
 */
export class ILog extends Module{

  constructor(dir, cfg){
    super(dir, cfg);
  }

  /**
   * Writes log message into logging system
   * @param {LogMessage} msg log message to write
   * @returns {guid} message Guid string
   */
  write(msg){
    msg = normalizeMsg(msg);
    this._doWrite(msg);
    return msg.guid;
  }

  // eslint-disable-next-line no-unused-vars
  _doWrite(msgFrame){ throw ABSTRACT("ILog._doWrite()"); }
}

/** Console logger */
export class ConLog extends ILog{
  constructor(dir, cfg){ super(dir, cfg); }
  _doWrite(msg){ writeConsole(msg, `app('${this.app.id}')`, this.constructor.name); }
}
