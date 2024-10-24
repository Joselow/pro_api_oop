import { ValidationError } from "class-validator"

export const mapErrors = (errors: ValidationError []) => {
    return errors.map(err => ({      
      property: err.property,
      constraints: err.constraints
    }))
}