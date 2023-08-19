'use strict';

/**
 * @description
 * Main export file for Safir.
 */

import {
  getComp,
  T,
  Safir } from "./src/core/root";
import { BaseComponent } from "./src/core/comp";
import { On , Off, GetAllEvents} from "./src/core/modifier";
import {byID, emit, byClass, byTag, JSON_HEADER, LocalSessionMemory, LocalStorageMemory, Manager, QueryString} from "./src/core/utils";

import { SafirSlot } from "./src/controls/safir-slot";

let SafirBuildInPlugins = {
  SafirSlot: SafirSlot
};

export {
  Safir,
  BaseComponent,
  getComp,
  byID,
  byClass,
  byTag,
  emit,
  SafirBuildInPlugins,
  On,
  Off,
  GetAllEvents,
  T,
  JSON_HEADER,
  LocalSessionMemory,
  LocalStorageMemory,
  QueryString,
  Manager
}
